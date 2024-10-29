import { ChevronDown, Heart, ShoppingBag, UserIcon } from '@assets/icons'

export default function Header() {
	return (
		<header className="flex h-16 w-full items-center">
			<div className="mx-auto flex h-full w-full max-w-[calc(1440px-calc(2*20px))] items-center justify-between px-5 text-sm">
				<div className="flex h-full w-full flex-1 items-center justify-start gap-6">
					<h3 className="text-3xl font-extrabold tracking-tight text-foreground">
						Ecommerce
					</h3>
					<div>
						<input
							type="text"
							className="rounded-full border bg-background px-5 py-2 text-foreground-light"
							placeholder="Buscar"
						/>
					</div>
					<nav className="flex h-full items-center">
						<ul className="flex-2 flex items-center gap-5">
							<li className="inline-flex items-center gap-1">
								Todas las categorias
								<ChevronDown className="size-4 text-inherit" />
							</li>
							<li>Tarjetas de regalo</li>
							<li>Evento especial</li>
						</ul>
					</nav>
				</div>
				<div className="flex h-full w-fit items-center gap-3">
					<button className="group/button flex size-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-200/50">
						<Heart className="size-5 text-inherit transition-colors group-hover/button:text-foreground" />
					</button>
					<button className="group/button flex size-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-200/50">
						<ShoppingBag className="size-5 text-inherit transition-colors group-hover/button:text-foreground" />
					</button>
					<button className="group/button flex size-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-200/50">
						<UserIcon className="size-5 text-inherit transition-colors group-hover/button:text-foreground" />
					</button>
				</div>
			</div>
		</header>
	)
}
