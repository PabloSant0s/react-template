import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen antialiased md:grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <span className="font-semibold">LOGO</span>
        </div>
        <footer className="hidden text-sm md:block">
          Painel do parceiro &copy; logo - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <footer className="text-center text-sm md:hidden">
        Painel do parceiro &copy; logo - {new Date().getFullYear()}
      </footer>
    </div>
  )
}
