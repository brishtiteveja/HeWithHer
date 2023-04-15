import { Switch } from '@headlessui/react'

export default function MyToggle({mode, setMode} : {mode: any, setMode: any}) {
  //const [enabled, setEnabled] = useState(false)
  const enabled = mode === 'dark'
  const label = mode === 'dark' ? 'light' : 'dark'
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4 hidden sm:inline text-xs text-gray-600">
          Enable {label} mode
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={setMode}
          className={`${
            enabled ? 'bg-green-600' : 'bg-gray-200'
          } mr-3 relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}