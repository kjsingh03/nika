import { ChangeEvent, useEffect, useState } from "react";
import { Blogs } from "../../interfaces";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAlert } from "../../store/UISlice";
import { defImg, edit, trash } from "../../assets";
import { Editor } from "@tinymce/tinymce-react";


function BlogItem({ setDeletePopup }: { setDeletePopup: (data: boolean) => void }) {

    // const [user, setUser] = useState<User>({ email: '' });

    const [formData, setFormData] = useState<Blogs>({ thumbnail: '', title: '', category: '', readLength: '', author: '', content: '' });

    const { id } = useParams();
    const dispatch = useDispatch();
    
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${id}`);
                setFormData(res.data.blog);
            } catch (e: any) {
                dispatch(setAlert({ message: e.response.data.message, type: "error" }));
            }
        };

    useEffect(() => {
        // const userData = localStorage.getItem('credentials');
        // if (userData) {
        //     setUser(JSON.parse(userData));
        // }

        fetchBlog();
        window.scrollTo(0, 0);
    }, []);

    const updateBlog = async () => {

        if (!formData.thumbnail) {
            console.error('No thumbnail');
            return;
        }

        const data = new FormData();
        try {
            if (typeof formData.thumbnail !== 'string') {
                data.append("file", formData.thumbnail);
                data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string);
                data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string);

                const thumbnailResponse = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, data);
                const res = await axios.put(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${id}`, {
                    ...formData,
                    thumbnail: thumbnailResponse.data.secure_url,
                    // email: user.email
                });
                console.log(res)
                setFormData(res.data.blog);
            } else {
                const res = await axios.put(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${id}`, formData);
                console.log(res);
            }
            dispatch(setAlert({ message: 'blog Updated successfully', type: "success" }));
        } catch (e: any) {
            dispatch(setAlert({ message: e.response.data.message, type: "error" }));
            console.log(e.response.data);
        } finally {
            setTimeout(() => dispatch(setAlert({ message: '', type: "error" })), 1200);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, files } = e.target as HTMLInputElement | HTMLSelectElement & { files?: FileList };

        if (type === 'file' && files) {
            setFormData((p) => ({ ...p, [name]: files[0] }));
        } else {
            setFormData((p) => ({ ...p, [name]: value }));
        }
    };

    const { thumbnail } = formData;

    const handleDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        (document.getElementById("thumbnail") as HTMLInputElement).files = dataTransfer.files;
    };

    const clearThumbnail = () => {
        (document.getElementById("thumbnail") as HTMLInputElement).files = null
        setFormData((p: any) => ({ ...p, thumbnail: null }))
    }

    const handleEditorChange = (content: string) => {
        setFormData({...formData,content});
    };

    const cloudinaryUpload = (blobInfo: any, progress: (percent: number) => void): Promise<string> => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('file', blobInfo.blob());
            formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string); // Your Cloudinary upload preset
            formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string); // Your Cloudinary cloud name

            const xhr = new XMLHttpRequest();
            xhr.open('POST', `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, true);

            // Track upload progress
            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentComplete = (event.loaded / event.total) * 100;
                    progress(Math.round(percentComplete)); // Report progress to TinyMCE
                }
            };

            // Handle success or failure
            xhr.onload = () => {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response.secure_url); // Return the uploaded image URL to TinyMCE
                } else {
                    reject('Image upload failed');
                }
            };

            xhr.onerror = () => reject('Image upload failed');
            xhr.send(formData);
        });
    };


    return (
        <>
            <div className="justify-start overflow-auto flex-col  w-[100%] items-start gap-1 inline-flex xlg:p-4 md:p-3 p-2.5">
                <div className="pb-[14px]">
                    <Link to="/dashboard" className="py-1.5 px-2 flex justify-center items-center gap-1 rounded-[36px] text-[#298D7C] text-center font-popins text-[14px] leading-6 font-[500]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.8002 7.99981L3.2002 7.9998M3.2002 7.9998L6.59431 11.1998M3.2002 7.9998L6.59431 4.7998" stroke="#298D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>Back to Dashboard</p>
                    </Link>
                </div>
                <div className="max-w-[793px] w-[100%] xlg:p-4 md:p-3 p-2.5 bg-white rounded-lg border border-[#d0d0d0] flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch flex-col justify-start items-start gap-5 flex">

                        <div className="relative w-full">
                            <input type="file" className="z-[2] opacity-0 h-[260px] md:h-[360px] relative w-[100%]" id="thumbnail" accept="image/*" name="thumbnail" onChange={handleChange} onDragOver={handleDragOver} onDrop={handleDrop} />
                            <div className="flex w-[100%] z-[1] absolute top-0">
                                {
                                    !thumbnail ?
                                        <label htmlFor="thumbnail" className="border-dashed border-2 w-[100%] h-[260px] md:h-[360px] border-gray-400 flex flex-col justify-center items-center gap-[39px]" >
                                            <img src={defImg} alt="Default Image Icon" />
                                            <p className="leading-6 text-[14px] font-popins text-[#676767] flex flex-wrap justify-center">
                                                Drag or upload your photo here
                                            </p>
                                        </label> :
                                        <div className="rounded-lg w-[100%] h-[260px] md:h-[360px] border-gray-400 flex flex-col justify-center items-center gap-[39px]">
                                            <img src={typeof formData.thumbnail === 'string'?formData.thumbnail:URL.createObjectURL(formData.thumbnail as any)} className="rounded-lg bg-contain w-[100%] h-[100%]" alt="Preview Image" />
                                        </div>
                                }
                            </div>
                            {
                                thumbnail &&
                                <div className="flex justify-between pt-2 px-1.5">
                                    <img src={edit} alt='Edit' onClick={clearThumbnail} />
                                    <img src={trash} alt='Trash' onClick={clearThumbnail} />
                                </div>
                            }
                        </div>

                        <h2 className="text-black font-bold text-[21px] font-inter">Title</h2>
                        <div className="form-group flex justify-end flex-col relative">
                            <input type="text" id="title" name="title" value={formData.title ?? ''} onChange={handleChange} placeholder="Enter Title" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                            {/* <label htmlFor="title" className="form-label bg-white text-[12px] font-[500]">Enter Title</label> */}
                        </div>

                        <h2 className="text-black font-bold text-[21px] font-inter">category</h2>
                        <div className="form-group flex justify-end flex-col relative">
                            <input type="text" id="category" name="category" value={formData.category ?? ''} onChange={handleChange} placeholder="Enter category" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                            {/* <label htmlFor="category" className="form-label bg-white text-[12px] font-[500]">Enter category</label> */}
                        </div>

                        <h2 className="text-black font-bold text-[21px] font-inter">author</h2>
                        <div className="form-group flex justify-end flex-col relative">
                            <input type="text" id="author" name="author" value={formData.author ?? ''} onChange={handleChange} placeholder="Enter author" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                            {/* <label htmlFor="author" className="form-label bg-white text-[12px] font-[500]">Enter author</label> */}
                        </div>

                        <h2 className="text-black font-bold text-[21px] font-inter">readLength</h2>
                        <div className="form-group flex justify-end flex-col relative">
                            <input type="readLength" id="readLength" name="readLength" value={formData.readLength ?? ''} onChange={handleChange} placeholder="Enter readLength" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                            {/* <label htmlFor="readLength" className="form-label bg-white text-[12px] font-[500]">Enter ReadLength</label> */}
                        </div>

                        <div className="h-screen">

                            <Editor
                                apiKey={import.meta.env.VITE_TINY_API_KEY}
                                value={formData.content}
                                init={{
                                    height: 500,
                                    menubar: true,
                                    a11y_advanced_options: true,
                                    plugins: [
                                        'advlist autolink lists link image charmap preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic backcolor | ' +
                                        'alignleft aligncenter alignright alignjustify | ' +
                                        'bullist numlist outdent indent | removeformat | help | image',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } img {display:block; max-width: 100%; height: 370px; }',
                                    images_upload_handler: (blobInfo, progress) => cloudinaryUpload(blobInfo, progress),
                                }}
                                onEditorChange={handleEditorChange}
                            />
                        </div>

                        <div className="self-stretch w-full justify-end items-end gap-3 inline-flex">
                            <button onClick={updateBlog} className="px-2 py-1.5 sm:w-fit w-full bg-[#e5f8f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 flex">
                                <div className="justify-start items-start gap-2.5 flex">
                                    <div className="text-center text-[#288d7c] text-sm font-medium font-['Poppins'] leading-normal">Save changes</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="self-stretch h-px bg-[#d9d9d9]" />
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-center text-black text-base font-semibold font-['Poppins'] leading-normal">Delete Blog</div>
                        <div className="w-5 h-5 relative" />
                    </div>
                    <div className="sm:flex-row flex-col sm:justify-between gap-5 w-full sm:items-center inline-flex">
                        <div className="text-[#6d6d6d] text-sm font-normal font-roboto leading-tight">NOTE: All your data according this Blog ...</div>
                        <div className="px-2 py-1.5 rounded-[36px] border-2 cursor-pointer border-[#ff4f49] justify-center items-center gap-1 flex" onClick={() => setDeletePopup(true)}>
                            <div className="px-1 justify-start items-start gap-2.5 flex">
                                <div className="text-center text-[#ff4f49] text-sm font-medium font-['Poppins'] leading-normal">Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BlogItem;