export default function TableCreator(props) {
    const headers = props.headers;
    const data = props.data;
    return (
        <table border='|'>
        <thead>
        <tr>
        {headers.map((header) => 
            <td>{header}</td>
        )}
        </tr>
        </thead>
        {data.map((datapoint, index) => {
            return (
                <tr key={index}>
                    {headers.map((header) => {
                        return <td>{datapoint[header]}</td>
                    })}
                </tr>
            )
        })}
        </table>
    );
}