function Media() {
    return (
        <div className="fixed flex flex-col space-y-2 top-0 right-0">
            <button type="button" className="vsm:hidden">MOBILE</button>
            <button type="button" className="hidden sm:block md:hidden">VSM</button>
            <button type="button" className="hidden md:block lg:hidden">SM</button>
            <button type="button" className="lg:hidden">MD</button>
            <button type="button" className="xl:hidden">LG</button>
            <button type="button" className="2xl:hidden">XL</button>
            <button type="button" className="hidden 2xl:block">2XL</button>
        </div>
    )
}

export default Media