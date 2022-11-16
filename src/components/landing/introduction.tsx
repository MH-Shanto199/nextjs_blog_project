import Image from 'next/image'


export default function Introduction() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-4 m-auto p-0 bg-gray img_wrapper">
                    <Image src='/images/profilePic.jpg' alt='MH.Shanto' width={292} height={292}/>
                    <h2>MH Shanto</h2>
                </div>
            </div>
            <div className="row">
                <div className="description mt-4">
                    <p>
                        Hello, I’m Shanto There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary
                    </p>
                    <p>
                        If you have any Question You can contract me on {''} <a target="blank" href="https://www.facebook.com/100084735467597/">Facebook </a>
                        Or follow me on {''} <a target="blank" href="https://github.com/MH-Shanto199">GitHub</a> For more updates
                    </p>
                </div>
            </div>
        </>
    )
}