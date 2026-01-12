"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { StatusSidePanel } from './status/StatusSidePanel';
import { ArchiveSidePanel } from './archive/ArchiveSidePanel';
import  SettingSidePanel  from './settings/SettingSidePanel';
import { ChatSidePanel } from './chats/ChatSidePanel';

export const SidePanel = () => {
    const path = usePathname();

    if (path === '/chats/status') {
        return <StatusSidePanel />;
    } else if (path === '/chats/archive') {
        return <ArchiveSidePanel />;    
    } else if (path === '/chats/settings') {
        return <SettingSidePanel />;
    } else {
        return <ChatSidePanel />;   
    }
};
