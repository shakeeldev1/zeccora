import { Link } from 'react-router-dom'

const NotFound = () => (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="section-kicker">404</p>
        <h1 className="display-font mt-4 text-5xl sm:text-6xl">This page has wandered off</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#6b5b4e]">
            The link may be old, or the bag has already sold through. Head back to the collection and keep browsing.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="rounded-full bg-[#9F6324] px-6 py-3 text-sm font-semibold text-white">Back to home</Link>
            <Link to="/products" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#5c4c40]">Shop collection</Link>
        </div>
    </section>
)

export default NotFound
