import Link from 'next/link'
import { Icon } from '@iconify/react'
import fileEdit from '@iconify/icons-mdi/file-edit'
import speedometerIcon from '@iconify/icons-mdi/speedometer'
import faceManShimmer from '@iconify/icons-mdi/face-man-shimmer'
import { Text } from '../../../components/atoms/Text'

export const Footer = () => (
  <footer className="flex bg-blue-600">
    <Link href="/corefan">
      <div>
        <Icon icon={speedometerIcon} color="white" />
        {/* <Text>Meter</Text> */}
      </div>
    </Link>
    <Link href="/meter">
      <div>
        <Icon icon={faceManShimmer} color="white" />
        {/* <Text>CoreFan</Text> */}
      </div>
    </Link>
    <Link href="/register">
      <div>
        <Icon icon={fileEdit} color="white" />
        {/* <Text>Register</Text> */}
      </div>
    </Link>
  </footer>
)
