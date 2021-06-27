import Link from 'next/link'
import { Icon } from '@iconify/react'
import fileEdit from '@iconify/icons-mdi/file-edit'
import speedometerIcon from '@iconify/icons-mdi/speedometer'
import { Text } from '@/components/atoms/Text'

export const Footer = () => (
  <footer className="flex h-16 bg-blue-600">
    <Link href="/meter">
      <div className="flex items-center justify-center flex-1">
        <Icon icon={speedometerIcon} color="white" width="32" />
        <Text>Meter</Text>
      </div>
    </Link>
    <Link href="/register">
      <div className="flex items-center justify-center flex-1">
        <Icon icon={fileEdit} color="white" width="32" />
        {/* <Text>Register</Text> */}
      </div>
    </Link>
  </footer>
)
