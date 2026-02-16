"use client";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";
import { CgMenuRightAlt } from "react-icons/cg";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  isHomePage?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
  isHomePage?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  isHomePage?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  isHomePage?: boolean;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 z-40 w-full px-5", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{
                visible?: boolean;
                isHomePage?: boolean;
              }>,
              { visible, isHomePage }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className,
  visible,
  isHomePage,
}: NavBodyProps) => {
  // Light theme when not on homepage and not scrolled
  const isLightTheme = !isHomePage && !visible;

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",

        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "1000px",
      }}
      className={cn(
        "relative z-60 mx-auto hidden w-full max-w-[1320px] flex-row items-center justify-between self-start lg:flex",
        visible ? "rounded-full bg-black/90 py-3 pr-3 pl-5" : "py-4",
        isHomePage && !visible && "bg-transparent",
        isLightTheme && "rounded-none bg-white border-b border-gray-dark/15",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{
                visible?: boolean;
                isHomePage?: boolean;
              }>,
              { visible, isHomePage }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
  visible,
  isHomePage,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const isLightTheme = !isHomePage && !visible;
  const isHomeTransparent = isHomePage && !visible;

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-base font-medium transition duration-200 lg:flex lg:space-x-2",
        isLightTheme ? "text-black" : "text-white",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-4 py-2 transition-colors",
            isLightTheme
              ? "text-black/70 hover:text-black"
              : isHomeTransparent
                ? "text-white hover:text-[#FDF567]"
                : "text-white/70 hover:text-[#FDF567]"
          )}
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className={cn(
                "absolute inset-0 h-full w-full rounded-full",
                isLightTheme ? "bg-black/5" : "bg-white/10"
              )}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible,
  isHomePage,
}: MobileNavProps) => {
  const isLightTheme = !isHomePage && !visible;

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        paddingRight: visible ? "16px" : "0px",
        paddingLeft: visible ? "16px" : "0px",
        borderRadius: visible ? "100px" : "0",
        y: visible ? 12 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-5 lg:hidden",
        visible && "bg-[#0A100D]/90",
        isHomePage && !visible && "bg-transparent",
        isLightTheme && "bg-white border-b border-gray-dark/15 max-w-full",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{
                visible?: boolean;
                isHomePage?: boolean;
              }>,
              { visible, isHomePage }
            )
          : child
      )}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
  visible,
  isHomePage,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{
                visible?: boolean;
                isHomePage?: boolean;
              }>,
              { visible, isHomePage }
            )
          : child
      )}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: // onClose,
MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-18 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-4xl bg-black p-6",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
  visible,
  isHomePage,
}: {
  isOpen: boolean;
  onClick: () => void;
  visible?: boolean;
  isHomePage?: boolean;
}) => {
  const isLightTheme = !isHomePage && !visible;
  const iconClass = isLightTheme ? "text-black" : "text-white";

  return isOpen ? (
    <IconX className={iconClass} onClick={onClick} />
  ) : (
    <CgMenuRightAlt className={cn(iconClass, "size-6")} onClick={onClick} />
  );
};

export const NavbarLogo = ({
  visible,
  isHomePage,
}: {
  visible?: boolean;
  isHomePage?: boolean;
}) => {
  const isLightTheme = !isHomePage && !visible;

  return (
    <Link href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
      <Image
        src="/logo.svg"
        alt="Eden Glass"
        width={933}
        height={218}
        className={cn("h-4 sm:h-5 w-auto", isLightTheme && "brightness-0")}
      />
    </Link>
  );
};
