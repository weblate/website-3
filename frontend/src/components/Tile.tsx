import { motion } from "framer-motion"
import { FunctionComponent, forwardRef } from "react"
import { classNames } from "src/styling"

interface Props {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

const Tile: FunctionComponent<Props> = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, onClick, href }, ref) => {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classNames(
          "flex items-center justify-center break-words rounded-xl p-4 text-center duration-500",
          "bg-flathub-white text-flathub-sonic-silver shadow-md dark:bg-flathub-arsenic/70 dark:text-flathub-spanish-gray",
          "hover:bg-flathub-gainsborow/20 hover:no-underline hover:shadow-xl dark:hover:bg-flathub-arsenic/90",
          "active:bg-flathub-gainsborow/40 active:shadow-sm active:dark:bg-flathub-arsenic",
          className,
        )}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        <span className="overflow-hidden">{children}</span>
      </motion.a>
    )
  },
)

Tile.displayName = "Tile"

export default Tile
