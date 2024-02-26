

export default function Shop({ children }) {

    return (
        <section id="shop">
            <h2>Clothes for  all occasions</h2>
            <ul id="products">
                {children}
            </ul>
        </section>
    );
}