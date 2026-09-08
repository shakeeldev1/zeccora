import { Link } from 'react-router-dom'

const NotFound = () => (
    <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
        <Link to="/" className="mt-6 inline-block text-[#d4af37] hover:underline">Back to home</Link>
    </section>
)

export default NotFound
