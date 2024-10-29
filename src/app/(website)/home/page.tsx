import { Arrow } from '@/assets/icons'
import Image1 from '@assets/img/image-1.png'
import Image2 from '@assets/img/image-2.png'
import Image3 from '@assets/img/image-3.png'
import Image4 from '@assets/img/image-4.png'
import Image5 from '@assets/img/image-5.png'

export default function Home() {
	return (
		<section className="w-full">
			<div className="mx-auto grid h-full w-full max-w-[calc(1440px-calc(2*20px))] grid-cols-12 grid-rows-12 gap-3 px-5 text-sm">
				<div
					className="col-span-8 row-span-8 flex aspect-[958/770] w-full flex-col gap-5 overflow-hidden rounded-3xl bg-cover bg-center p-16"
					style={{ backgroundImage: `URL(${Image1.src})` }}
				>
					<h2 className="max-w-80 text-7xl text-white">
						Outfit para el verano
					</h2>
					<p className="max-w-72 text-pretty text-lg text-white">
						Más de 100 colecciones para inspirarte en tu vestimenta este verano
					</p>
					<button className="max-w-72 rounded-full bg-background-alt py-3 font-semibold text-white">
						Ver Colecciones
					</button>
				</div>
				<div
					className="col-span-4 row-span-4 w-full overflow-hidden rounded-3xl bg-cover bg-center p-8"
					style={{ backgroundImage: `URL(${Image2.src})` }}
				>
					<h2 className="max-w-52 text-5xl tracking-tight text-foreground">
						Mantente activo
					</h2>
				</div>
				<div
					className="col-span-4 row-span-4 w-full overflow-hidden rounded-3xl bg-cover bg-center p-8"
					style={{ backgroundImage: `URL(${Image3.src})` }}
				>
					<h2 className="max-w-52 text-5xl tracking-tight text-foreground">
						Outfit casual
					</h2>
				</div>
				<div className="col-span-3 row-span-4 row-start-9 flex flex-col justify-center gap-5">
					<h3 className="text-6xl font-normal tracking-tight text-foreground">
						Busca inspiración
					</h3>
					<p className="text-lg">
						Nuestras combinaciones favoritas para outfit casual que pueden
						inspirarte a aplicar en tu actividad diaria.
					</p>
					<button className="w-full rounded-full border border-black py-3 uppercase text-foreground">
						Buscar inspiracion
					</button>
				</div>
				<div
					className="col-span-4 row-span-4 flex h-full items-end justify-between overflow-hidden rounded-3xl bg-cover bg-center p-8"
					style={{ backgroundImage: `URL(${Image4.src})` }}
				>
					<h2 className="max-w-52 text-4xl tracking-tight text-white">
						Oversise
					</h2>
					<button>
						<Arrow className="size-8 text-white" />
					</button>
				</div>
				<div
					className="col-span-5 row-span-4 flex h-full items-end justify-between overflow-hidden rounded-3xl bg-cover bg-center p-8"
					style={{ backgroundImage: `URL(${Image5.src})` }}
				>
					<h2 className="max-w-52 text-4xl tracking-tight text-white">
						Oversise
					</h2>
					<button>
						<Arrow className="size-8 text-white" />
					</button>
				</div>
			</div>
		</section>
	)
}
