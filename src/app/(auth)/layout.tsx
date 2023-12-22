const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
    </div>
  )
}

export default Layout