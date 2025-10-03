"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider {...props}
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >{children}</NextThemesProvider>
    )
}