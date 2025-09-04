import { WorkspaceNavbar } from '@/components/organisms/Workspace/WorkspaceNavbar';
import { WorkspacePanel } from '@/components/organisms/Workspace/WorkspacePanel';
import { WorkspaceSidebar } from '@/components/organisms/Workspace/WorkspaceSidebar';
import { DMList } from '@/pages/Workspace/DMs/DMList';
import { Notifications } from '@/pages/Workspace/Notifications/Notifications';
import { useLocation } from 'react-router-dom';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export const WorkspaceLayout = ({ children }) => {
    const location = useLocation();
    const showDMListInPanel = /\/workspaces\/[^/]+\/dms\/?$/.test(location.pathname);
    const showNotificationsInPanel = /\/workspaces\/[^/]+\/notifications\/?$/.test(location.pathname);
    return (
        <div className="h-[100vh]">
            <WorkspaceNavbar />
            <div className="flex h-[calc(100vh-40px)]">
                <WorkspaceSidebar />
                <ResizablePanelGroup direction="horizontal" autoSaveId={'workspace-resize'}>
                    <ResizablePanel
                        defaultSize={20}
                        minSize={11}
                        className='bg-slack-medium'
                    >
                        {showDMListInPanel ? <DMList /> : showNotificationsInPanel ? <Notifications /> : <WorkspacePanel />}
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel
                        minSize={20}
                    >
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
                
            </div>
        </div>
    );
};
