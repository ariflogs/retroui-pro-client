import { createFileRoute } from '@tanstack/react-router'
import { Card, Text } from "@/components/ui";
import { Button } from "@/components/retroui/Button";
import { useAuth } from "@/state/auth";

export const Route = createFileRoute('/figma-access')({
    component: RouteComponent,
})


function RouteComponent() {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!user || !user.isPro) {
        return <div>Unauthorized!</div>
    }

    return <div className="min-h-screen w-full flex justify-center px-4 mt-10 pro-theme">
        <div className="w-full max-w-3xl">
            <div className="mb-6">
                <Text as="h2">Figma Access</Text>
                <Text className="text-muted-foreground font-medium mt-1">
                    Download .fig file → import it into Figma → start using.
                </Text>
            </div>


            <Card className="w-full shadow-none mb-4">
                <Card.Header className="flex-row w-full justify-between items-center">
                    <div>
                        <Card.Title className='mb-0'>v1.1.0</Card.Title>
                        <Text className="text-muted-foreground text-sm">
                            Published at: 31 Jan, 2026
                        </Text>
                    </div>
                    <div className="flex space-x-3">
                        <Button asChild variant="secondary">
                            <a target="_blank" href="https://www.figma.com/design/NhTfRfYfR0LeQTatgn9zDn/RetroUI-Pro-Figma-%7C-v-1.1.0?node-id=0-1&t=YMTcdX00E2vD04ai-1">Live Preview</a>
                        </Button>
                        <Button asChild>
                            <a href="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/figma-kit/cde2dfd3-e13d-45dc-b77b-242b1b2db146/retroui_pro_figma%20_%20v_1.1.0.fig">Download</a>
                        </Button>
                    </div>
                </Card.Header>
            </Card>
            <Card className="w-full shadow-none">
                <Card.Header className="flex-row w-full justify-between items-center">
                    <div>
                        <Card.Title className='mb-0'>v1.0.0</Card.Title>
                        <Text className="text-muted-foreground text-sm">
                            Published at: 08 Nov, 2025
                        </Text>
                    </div>
                    <div className="flex space-x-3">
                        <Button asChild variant="secondary">
                            <a target="_blank" href="https://www.figma.com/design/yUBUpdk0tGyLpes8x0qiDn/NeoBrutalism-Web-Components-%7C-RetroUI-Pro?version-id=2283753821687514821&node-id=0-1&p=f&t=BcNctyRS1ZSUZGp2-0">Live Preview</a>
                        </Button>
                        <Button asChild>
                            <a href="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/figma-kit/retroui_pro_figma_v1.0.0">Download</a>
                        </Button>
                    </div>
                </Card.Header>
            </Card>
        </div>
    </div>
}