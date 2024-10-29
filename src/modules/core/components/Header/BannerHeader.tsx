export default function BannerHeader() {
	return (
		<div className="flex h-14 w-full items-center border-b">
			<div className="mx-auto flex h-full w-full max-w-[calc(1440px-calc(2*20px))] items-center justify-between px-5 text-sm">
				<div className="flex h-full flex-1 items-center justify-start gap-2">
					<span>Idioma</span>
					<span>Moneda</span>
				</div>
				<div className="flex flex-1 items-center justify-end gap-3">
					<span>Seguir pedido</span>
					<span>FAQ</span>
					<span>Nosotros</span>
					<span>Contactanos</span>
				</div>
			</div>
		</div>
	)
}
