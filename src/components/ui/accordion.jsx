import * as React from "react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext({})

const Accordion = React.forwardRef(({ className, children, type = "single", collapsible = true, defaultValue, ...props }, ref) => {
  const [openItems, setOpenItems] = React.useState(defaultValue ? [defaultValue] : [])

  const toggleItem = (value) => {
    if (type === "single") {
      setOpenItems(prev => {
        if (prev.includes(value)) {
          return collapsible ? [] : prev
        }
        return [value]
      })
    } else {
      setOpenItems(prev => {
        if (prev.includes(value)) {
          return prev.filter(item => item !== value)
        }
        return [...prev, value]
      })
    }
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef(({ className, value, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("border-b border-white/10", className)}
      data-value={value}
      {...props}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, ...child.props })
        }
        return child
      })}
    </div>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, value, ...props }, ref) => {
  const { openItems, toggleItem } = React.useContext(AccordionContext)
  const isOpen = openItems.includes(value)
  
  return (
    <button
      ref={ref}
      className={cn(
        "flex w-full flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left",
        className
      )}
      onClick={() => toggleItem(value)}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      >
        <path
          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, children, value, ...props }, ref) => {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = openItems.includes(value)

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
