

export default function UserList(){
    const borderStyle = {"border" : "1px solid black"};

    return (
        <>
            <table style={borderStyle} className="mx-auto w-full max-w-screen-lg mt-5 mb-5">
                <thead style={borderStyle}>
                    <th style={borderStyle}>Name</th>
                    <th style={borderStyle}>LastName</th>
                    <th style={borderStyle}>Email</th>
                    <th style={borderStyle}>Identification</th>
                    <th style={borderStyle}>Avatar</th>
                </thead>
                <tbody>
                    <tr style={borderStyle}>
                        <td style={borderStyle}>Timo</td>
                        <td style={borderStyle}>Boll</td>
                        <td style={borderStyle}>timo@boll.com</td>
                        <td style={borderStyle}>1234567</td>
                        <td style={borderStyle}><img
                        style={{
                            "width" : 50,
                            "height" : 50
                        }}
                        src="https://butterflyonline.com/wp-content/uploads/2015/01/bollwc1.jpg"
                        alt="Timo boll Avatar"
                        className="mx-auto"
                        /></td>
                    </tr>
                    <tr>
                        <td style={borderStyle}>Dimitrij</td>
                        <td style={borderStyle}>Ovtcharov</td>
                        <td style={borderStyle}>dima@ovtcharov.com</td>
                        <td style={borderStyle}>12345678</td>
                        <td style={borderStyle}><img
                        style={{
                            "width" : 50,
                            "height" : 50
                        }}
                        src="https://pro.butterfly.tt/player-men/images/ovtcharov-detail.jpg"
                        alt="Dimitrij Ovtcharov Avatar"
                        className="mx-auto"
                        /></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}