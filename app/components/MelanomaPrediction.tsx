'use client';
import React from 'react'
import { useState, ChangeEvent, DragEvent } from 'react'
import Select, { ActionMeta } from 'react-select';

interface APIResponse {
  resText : string;
}

interface Option {
  value: string;
  label: string;
}

const MelanomaPrediction = () => {

  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);
  const [responseText, setResponseText] = useState<string>("");
  const [model, setModel] = useState<Option | null>({value: "model_from_scratch", label: "Model from scratch"});

  const options: Option[] = [
    { value: "model_from_scratch", label: "Model from scratch" },
    { value: "resnet_model", label: "ResNet" },
    { value: "vgg16_model", label: "VGG16" },
  ];

  const uploadToClient = (event : ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0])
    {
      const i : File = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  }

  const uploadToServer = async (event : React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!image || !model) return;

    const body : FormData = new FormData();
    body.append("image", image);
    body.append("model", model.value)

    const response : Response = await fetch("/api/infer", {
      method: "POST",
      body
    });

    if (response.ok) {
      const responseData : APIResponse = await response.json()
      setResponseText(responseData['resText'])
    }
    else {
      setResponseText("Error")
    }
  }

  const reset = () => {
    setCreateObjectURL(null);
    setResponseText("");
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      const i = e.dataTransfer.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };


  return (
    <div className='flex justify-center h-3/4 m-10'>
      <div className='flex flex-col items-center p-6 w-2/5 bg-white rounded-3xl shadow-xl'>
        <form className="flex flex-col w-full items-center">

          <Select 
            options={options} 
            value={model}
            onChange={(option: Option | null) => setModel(option)} 
            className='w-1/2 mb-4' />
          {
            createObjectURL ? (
            <>
              <img src={createObjectURL} id="imageOutput" width="200"></img>
              <button type="submit" id="submit" className='w-20 border-2 rounded-md my-2 p-1 text-white bg-blue-500 hover:bg-blue-700' onClick={uploadToServer}> Submit </button>
              <button className='w-60 rounded-md my-2 p-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent' onClick={reset}> Select another image </button> 
            </>
            ) : (

            <label htmlFor='imageInput' className='flex justify-center items-center border-2 border-dashed border-gray-400 w-full h-64 hover:cursor-pointer'
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}>

              <input type='file' id="imageInput" className='hidden' accept="image/*" onChange={uploadToClient} required></input>

              <span> Choose a file or drag it here </span>
            </label>
            
          )}

          
        </form>

        {responseText && <div className='my-10'> Percentage probability of melanoma: {parseFloat(responseText).toFixed(2)} %</div> }
      </div>
    </div>
  )
}

export default MelanomaPrediction
