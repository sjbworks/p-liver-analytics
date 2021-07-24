import { Layout } from 'components/templates'
import { Input } from 'components/molecules/Input'
import { Select } from 'components/molecules/Select'
import { Text } from 'components/atoms/Text'
import { useState } from 'react'

const Register = () => {
  const [meter, setMeter] = useState('')
  const [border, setBorder] = useState('')
  const [rank, setRank] = useState<string>('')
  const OPTIONS = [
    { name: 'E1', value: 'E1' },
    { name: 'D1', value: 'D1' },
    { name: 'D2', value: 'D2' },
    { name: 'D3', value: 'D3' },
    { name: 'C1', value: 'C1' },
    { name: 'C2', value: 'C2' },
    { name: 'C3', value: 'C3' },
    { name: 'B1', value: 'B1' },
    { name: 'B2', value: 'B2' },
    { name: 'B3', value: 'B3' },
    { name: 'A1', value: 'A1' },
    { name: 'A2', value: 'A2' },
    { name: 'A3', value: 'A3' },
    { name: 'S1', value: 'S1' },
    { name: 'S2', value: 'S2' },
    { name: 'S3', value: 'S3' },
    { name: 'S4', value: 'S4' },
    { name: 'S5', value: 'S5' },
  ]
  return (
    <Layout>
      {/* <Text bold={true}>メーター</Text> */}
      <Input
        value={meter}
        label={'メーター'}
        labelId={'meter'}
        placeholder={'メーターを入力してください'}
        onChange={setMeter}
        size="lg"
        className={{ label: 'mt-3 block' }}
      />
      <Input
        label={'±ボーダー'}
        labelId={'border'}
        value={border}
        placeholder={'±ボーダーを入力してください'}
        onChange={setBorder}
        size="lg"
        className={{ label: 'mt-3 block' }}
      />
      {/* <Text>ランク</Text> */}
      <Select value={rank} placeholder={'rank'} options={OPTIONS} onChange={setRank} size="lg" />
    </Layout>
  )
}

export default Register
