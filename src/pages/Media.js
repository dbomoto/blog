function Media() {
    return (
        <div className="fixed flex flex-col space-y-2 top-0 right-0">
            <button type="button" className="vsm:hidden bg-orange-200">BELOW 300PX</button>
            <button type="button" className="hidden vsm:block sm:hidden bg-orange-200">VSM</button>
            <button type="button" className="hidden sm:block md:hidden bg-orange-200">SM</button>
            <button type="button" className="hidden md:block lg:hidden bg-orange-200">MD</button>
            <button type="button" className="hidden lg:block xl:hidden bg-orange-200">LG</button>
            <button type="button" className="hidden xl:block 2xl:hidden bg-orange-200">XL</button>
            <button type="button" className="hidden 2xl:block">2XL</button>
        </div>
    )
}

export default Media