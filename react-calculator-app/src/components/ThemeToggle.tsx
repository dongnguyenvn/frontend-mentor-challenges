import clsx from 'clsx'
import { ChangeEvent, useEffect, useState } from 'react'

type Theme = {
  label: string
  value: string
}
const themes: Theme[] = [
  {
    label: '1',
    value: 'theme-blue',
  },
  {
    label: '2',
    value: 'theme-cyan',
  },
  {
    label: '3',
    value: 'theme-violet',
  },
]

const Toggle = ({ index }: { index: number }) => {
  return (
    <div
      className={clsx(
        'absolute rounded-full w-4 h-4 pointer-events-none',
        'transition duration-150',
        'blue:bg-red-500',
        'cyan:bg-orange-700',
        'violet:bg-cyan-500',
      )}
      style={{
        transform: `translateX(${index * 100}%)`,
        margin: `${index * 0.25}rem`,
      }}
    />
  )
}

const ThemeToggle = () => {
  const [active, setActive] = useState('theme-blue')

  useEffect(() => {
    themes.forEach(({ value }) =>
      document.body.classList.toggle(value, value === active),
    )
  }, [active])

  const index = themes.findIndex(({ value }) => value === active)
  const handleChangeTheme = (e : ChangeEvent<HTMLInputElement>) => {
    setActive(e.target.value)
  }
  return (
    <div
      role="group"
      aria-labelledby="theme"
      className="flex items-end gap-4"
      onChangeCapture={handleChangeTheme}
    >
      <span id="theme" className="font-bold text-xs pb-0.5">
        THEME
      </span>

      <div>
        <div className="flex px-1.5 justify-around gap-1">
          {themes.map(({ label, value }) => (
            <label
              key={value}
              htmlFor={value}
              className="mb-0.5 font-bold text-xs"
            >
              {label}
            </label>
          ))}
        </div>

        <div
          className={clsx(
            'flex items-center rounded-full p-1 gap-1 relative',
            'blue:bg-blue-700',
            'cyan:bg-red-700',
            'violet:bg-violet-800',
          )}
        >
          {themes.map(({ value }) => (
            <div key={value} className="w-4 flex justify-center items-center">
              <input
                type="radio"
                name="theme"
                id={value}
                value={value}
                defaultChecked={value === active}
                className="opacity-0"
              />
            </div>
          ))}

          <Toggle index={index} />
        </div>
      </div>
    </div>
  )
}

export { ThemeToggle }
