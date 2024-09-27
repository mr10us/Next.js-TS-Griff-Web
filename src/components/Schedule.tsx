export const Schedule = () => {
  return (
    <div className="grid text-lg gap-2 w-full sm:text-xl">
      <div className="grid grid-cols-2 md:grid-cols-[1fr_0.5fr] gap-4">
        <p>Пн, Ср, Пт:</p>
        <p className="place-self-end">7-21</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-[1fr_0.5fr] gap-4">
        <p>Вт, Чт:</p>
        <p className="place-self-end">8-12</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-[1fr_0.5fr] gap-4">
        <p>Субота:</p>
        <p className="place-self-end">8-18</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-[1fr_0.5fr] gap-4">
        <p>Неділя:</p>
        <p className="place-self-end">8-16</p>
      </div>
    </div>
  )
}