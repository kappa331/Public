export default function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting');
        }}>
            <input />
            <button>Sned</button>
        </form>
    );
}