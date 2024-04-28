import Image from 'next/image'
import shirt1 from '../assets/T-Shirt/shirt1.png'
import shirt2 from '../assets/T-Shirt/shirt2.png'
import shirt3 from '../assets/T-Shirt/shirt3.png'

export default function Home() {
  return (
    <main className="flex gap-12 w-full max-w-screen-customScreen ml-auto min-h-[656px]">
      <a
        href=""
        className="relative bg-gradient-to-r from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer flex items-center justify-center opacity-[1] group"
      >
        <Image
          src={shirt1}
          width={520}
          height={480}
          alt=""
          className="object-cover"
        />
        <footer className="absolute bottom-1 left-1 right-1 rounded-[6px] flex items-center p-8 justify-between bg-black/[0.6] translate-y-[110%] opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-[0%] group-hover:opacity-100">
          <strong className="text-xl">Camiseta X</strong>
          <span className="text-2xl font-bold text-green300">R$ 79,90</span>
        </footer>
      </a>
      <a
        href=""
        className="relative bg-gradient-to-r from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer flex items-center justify-center opacity-[1] group"
      >
        <Image src={shirt2} width={520} height={480} alt="" />
        <footer className="absolute bottom-1 left-1 right-1 rounded-[6px] flex items-center p-8 justify-between bg-black/[0.6] translate-y-[110%] opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-[0%] group-hover:opacity-100">
          <strong className="text-xl">Camiseta 2</strong>
          <span className="text-2xl font-bold text-green300">R$ 79,90</span>
        </footer>
      </a>
      <a
        href=""
        className="relative bg-gradient-to-r from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer flex items-center justify-center opacity-[1] group"
      >
        <Image src={shirt3} width={520} height={480} alt="" />
        <footer className="absolute bottom-1 left-1 right-1 rounded-[6px] flex items-center p-8 justify-between bg-black/[0.6] translate-y-[110%] opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-[0%] group-hover:opacity-100">
          <strong className="text-xl">Camiseta 3</strong>
          <span className="text-2xl font-bold text-green300">R$ 79,90</span>
        </footer>
      </a>
    </main>
  )
}
