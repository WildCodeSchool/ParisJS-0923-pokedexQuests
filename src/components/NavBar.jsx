function NavBar({index, data, setIndex}) {

    function prev() {
        setIndex(index - 1);
    }

    function next() {
        setIndex(index + 1)
    }


    return (
        <>
            {
                (index > 0)
                    ? <button onClick={prev}>Precedent</button>
                    : null
            }
            {
                (index < data.length - 1)
                    ? <button onClick={next}>Suivant</button>
                    : null
            }
        </>
    );
}

export default NavBar;