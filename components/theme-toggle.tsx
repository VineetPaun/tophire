"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon01Icon, Sun01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="size-9">
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="size-9"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <HugeiconsIcon icon={Sun01Icon} className="size-5" />
            ) : (
                <HugeiconsIcon icon={Moon01Icon} className="size-5" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
