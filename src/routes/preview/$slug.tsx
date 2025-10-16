import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/preview/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/preview/$slug"!</div>
}

