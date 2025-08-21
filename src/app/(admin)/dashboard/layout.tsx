"use client";
import {ThemeProvider} from "@/app/(admin)/dashboard/context/ThemeContext";
import {SidebarProvider} from "@/app/(admin)/dashboard/context/SidebarContext";
import Content from "@/app/(admin)/dashboard/layout/Content";

export default function AdminLayout({ children }: { children: React.ReactNode }) {

    return (
        <ThemeProvider>
            <SidebarProvider >
                <Content>{children}</Content>
            </SidebarProvider>
        </ThemeProvider>
    );
}