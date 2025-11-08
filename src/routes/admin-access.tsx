import { createFileRoute } from '@tanstack/react-router'
import { Card, Text } from "@/components/ui";
import { Button } from "@/components/retroui/Button";
import { useAuth } from "@/state/auth";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute('/admin-access')({
    component: RouteComponent,
})

function RouteComponent() {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!user || !user.isPro) {
        return redirect({
            to: '/figma',
            replace: true
        })
    }


    return <div className="min-h-screen w-full flex justify-center px-4 mt-10 pro-theme">
        <div className="w-full max-w-3xl">
            <div className="mb-6 flex justify-between items-start">
                <div>
                    <Text as="h2">Admin Access</Text>
                    <Text className="text-muted-foreground font-medium mt-1">
                        Download .zip file → extract it → start using.
                    </Text>
                </div>
                <div>
                    <Button asChild variant="secondary"><a href="https://demo.brutadmin.com" target="_blank">Live Demo</a></Button>
                </div>
            </div>

            <Card className="w-full shadow-none">
                <Card.Header className="flex-row w-full justify-between items-center">
                    <div>
                        <Card.Title className='mb-0'>v1.0.0</Card.Title>
                        <Text className="text-muted-foreground text-sm">
                            Published at: 28 Oct, 2025
                        </Text>
                    </div>
                    <Button asChild>
                        <a href="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/brutadmin/brutadmin-dashboard-1.0.0.zip">Download</a>
                    </Button>
                </Card.Header>
            </Card>
        </div>
    </div>
}
