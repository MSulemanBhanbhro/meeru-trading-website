import { SocialIcons } from '@/components/ui/SocialIcons'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary-500 mb-4">Meeru-72-fx</h2>
            <p className="text-gray-400 max-w-md">
              Professional Binary & Forex Trading Signals, Mentoring & Community
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4">
              <SocialIcons />
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Meeru-72-fx. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}