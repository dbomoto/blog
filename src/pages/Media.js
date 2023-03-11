function Media() {
    return (
        <div className="fixed flex flex-col space-y-2 top-0 right-0">
            <button type="button" className="hidden vsm:block sm:hidden">VSM</button>
            <button type="button" className="hidden sm:block md:hidden">SM</button>
            <button type="button" className="hidden md:block lg:hidden">MD</button>
            <button type="button" className="hidden lg:block xl:hidden">LG</button>
            <button type="button" className="hidden xl:block 2xl:hidden">XL</button>
            <button type="button" className="hidden 2xl:block">2XL</button>
        </div>
    )
}

export default Media