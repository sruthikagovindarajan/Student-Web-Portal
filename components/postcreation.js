function Create() {
    const onsubmit = (event) => {
        event.preventDefault();
        const title = document.getElementById('title')
        const caption = document.getElementById('caption')
        // const attachments = document.getElementById('attachments');
        // const reader = new window.FileReader();
        // reader.readAsArrayBuffer(attachments);
        // reader.onload = () => {
        //     console.log(Buffer(reader.result));
        // }
        console.log(title.value);
        console.log(caption.value);
        // console.log(attachments.length);
        const data = { username: 'example' };

        fetch('http://localhost:3000/api/createpost', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title.value,
                caption: caption.value
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    }

    return (
        <div className='flex items-center' >
            <form onSubmit={(event) => onsubmit(event)}>
                <label>title</label>
                <input id='title' type={'text'}></input>
                <label>caption</label>
                <input id='caption' type={'text'}></input>
                <label>attachments</label>
                <input id='attachements' accept="image/png, image/jpeg, image/jpg" type={'file'}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Create;