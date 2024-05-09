import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import type { ButtonProps } from "@/shadcn/button/button"

import styles from './index.module.css'

const Pagination = ({ ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={styles.Pagination}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ ...props }, ref) => (
  <ul
    ref={ref}
    className={styles.PaginationContent}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => (
  <li ref={ref} className="" {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    data-variant={isActive ? "outline" : "ghost"}
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data-size={size}
    className={styles.PaginationLink}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

// size is 'default' from both next and previous
const PaginationPrevious = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={styles.PaginationPrevious}
    {...props}
  >
    <ChevronLeft style={{
      height: '1rem',
      width: '1rem'
    }} />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={styles.PaginationNext}
    {...props}
  >
    <span>Next</span>
    <ChevronRight style={{
      height: '1rem',
      width: '1rem'
    }} />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={styles.PaginationEllipsis}
    {...props}
  >
    <MoreHorizontal style={{
      height: '1rem',
      width: '1rem'
    }} />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
