import backgroundImage1 from './public/job-profile-header.jpg';
import backgroundImage2 from './public/background.jpg';

const JobProfile = () => {
    return(
        <div className="h-screen w-screen flex flex-col items-center" style={{backgroundImage : `url(${backgroundImage2})`}}>
            <div className="h-1/5 w-full bg-cover bg-center" style={{backgroundImage : `url(${backgroundImage1})`}}></div>
            <div className='h-5/6 w-5/6 bg-white relative -top-10 shadow-2xl shadow-blue-300 rounded-lg p-10 overflow-y-auto'>
                <div className='flex text-4xl font-semibold text-blue-500'>
                    <p className='w-3/4 '>Job Title</p>
                    <p className='w-1/4 '>Salary</p>
                </div>
                <p className='mb-10'>Job catagory</p>
                <hr  className=' mb-4'/>
                <div>
                    <p>Skils Required</p>
                    <div className='flex m-2'>
                        <p className='mx-2 border-2 border-blue-500 rounded-full px-4'>skill Required 1</p>
                        <p className='mx-2 border-2 border-blue-500 rounded-full px-4'>skill Required 2</p>
                        <p className='mx-2 border-2 border-blue-500 rounded-full px-4'>skill Required 3</p>
                        <p className='mx-2 border-2 border-blue-500 rounded-full px-4'>skill Required 4</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Working Hours & Work Type :</p>
                        <div className='flex m-2'>
                            <p className='mx-2 border-2 border-blue-500 rounded-full px-4'>2-4 hr per day</p>&
                            <p className='mx-2 border-2 border-blue-500 rounded-full px-4'>full time</p>
                        </div>
                    </div>
                    <div>
                        <p>Payment method</p>
                        <div className='flex m-2'>
                            <p className='mx-2 border-2 border-blue-500 rounded-full px-4'>Online</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Description</p>
                    <div>
                        <p className='m-2 border-2 rounded-md px-4 py-1 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iusto omnis. Magnam amet ab ullam assumenda, vel eum fuga accusantium dicta odit impedit possimus molestiae similique iste voluptatibus! At provident animi debitis eveniet dolore, nemo harum tempora numquam facere quis, soluta laboriosam, nam voluptatibus repellendus. Ipsa et accusamus facilis atque odio illum expedita maiores, rem cumque ad unde aliquid voluptas. Magnam sunt quibusdam tempora odit dolorem repellat quisquam iste illo. Temporibus dolores facilis modi necessitatibus accusamus officia odit est illum itaque amet reiciendis quisquam eligendi sunt, similique nam distinctio impedit eos nostrum fuga culpa ea blanditiis deleniti veniam molestias. Vero veritatis inventore ducimus nisi beatae iste tenetur consequuntur iure, iusto amet nulla quas molestias aut! Deleniti totam harum unde quasi laudantium consequatur voluptatibus voluptatum atque reiciendis recusandae distinctio beatae eligendi explicabo adipisci illo, quae praesentium corrupti rerum, omnis voluptate ratione odio nostrum? Nulla doloremque excepturi sed accusamus reprehenderit voluptatibus laudantium at, ratione est dolore, ab necessitatibus quisquam quos blanditiis deleniti provident esse! Accusantium vero porro laborum eaque id sed blanditiis, fugiat, sunt minima enim quibusdam voluptate, temporibus explicabo nihil ab voluptatem. Recusandae, molestiae facere ullam saepe eos iste esse itaque quod velit magni consequatur quibusdam cupiditate unde, ipsam pariatur blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. A porro sequi fugiat incidunt nihil? Dolore, qui doloribus aut eaque libero a eum? Facere animi nostrum libero sunt? Illo amet labore quas iste ipsum magnam. Praesentium sapiente ipsum exercitationem deserunt odio perferendis, ab laboriosam reprehenderit inventore totam quod nostrum explicabo iusto quasi sed doloribus neque architecto mollitia sit impedit enim dolores soluta. Sunt ducimus debitis esse. Nostrum quidem at optio est neque doloremque ut illum maxime ad aspernatur. Voluptatibus rem praesentium suscipit aliquid voluptate error iusto possimus similique enim veniam, architecto laudantium harum! Debitis eum amet reiciendis pariatur laborum nostrum eius? </p>
                    </div>
                </div>
                <button className='bg-blue-500 p-2 rounded-lg text-white m-4'>Apply for Job</button>
            </div>
        </div>
        )
}

export default JobProfile;