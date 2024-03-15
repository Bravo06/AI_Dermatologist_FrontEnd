import React from 'react'
import Navbar from '../components/Navbar'

const ProjectDescriptionPage = () => {
  return (
    <>
    <Navbar />
    <div className='flex justify-center h-3/4 m-10'>
      <div className='flex flex-col items-center p-6 w-11/12 bg-white rounded-3xl shadow-xl'>
        
        <div className='mx-5'>
        <div className='text-xl font-semibold underline mt-5 mb-3'> Abstrac </div>
        <p>
          The literature survey, "AI Dermatologist: Melanoma Classification using Deep Learning," will explore the integration of 
          computer vision techniques in healthcare using deep convolutional neural networks to differentiate malignant melanoma from 
          benign melanoma. This study will investigate the potential for providing a rapid and cost-effective diagnosis for melanoma, 
          which is currently time-consuming and expensive. By utilizing a dataset of dermoscopic images of 1800 benign moles and 1497 
          malignant moles from the ISIC (Internation Skin Imaging Collaboration) Archive, this research will build a convolutional 
          neural network using TensorFlow (Keras). Various architectures will be examined to find a good fit for the use case, including 
          the ResNet and ImageNet architectures. The model's performance will be evaluated based on accuracy, F1 score, and other metrics. 
          The study will also discuss the scalability of the model to other skin problems and present a web app interface for accessible use. 
          The findings will emphasize the importance of early diagnosis through automated skin lesion classification, potentially saving 
          thousands of lives.
        </p>

        <div className='text-xl font-semibold underline mt-5 mb-3'> Introduction </div>
        <p>
          Skin cancer, with its various forms, poses a significant health concern worldwide. Among these, melanoma stands out as a particularly 
          aggressive and life-threatening subtype. In the United States alone, nearly 100,000 new cases of melanoma are diagnosed annually, 
          leading to around 8,000 deaths, making it one of the deadliest forms of skin cancer. Early detection is crucial for effective 
          treatment and improved survival rates, and traditionally, this has relied on visual inspection, clinical screening, dermoscopic 
          analysis, and, in some cases, biopsies. Non invasive techniques, like taking dermoscopic image of the moles, are employed initially 
          before biopsy is performed. The field of computer vision, powered by deep learning technologies, offers a promising avenue to 
          revolutionize the diagnosis and management of melanoma. Deep learning and computer vision technologies can be leveraged to assist 
          doctors to analyse the dermoscopic images more accurately. It also is a more time and cost efficient method for initial diagnosis 
          before opting for biopsy. 
          <br /><br />
          This literature survey will delve into the development and application of an AI-driven tool that leverages deep convolutional neural 
          networks (CNNs) for the rapid and accurate classification of skin lesions. This innovative approach has the potential to 
          significantly impact the healthcare industry by providing a quick, cost-effective, and scalable solution for melanoma diagnosis, 
          potentially saving many lives. 
          <br /><br />
          Deep learning has achieved impressive results in skin lesion analysis, including lesion segmentation, lesion classification, 
          and medical attribute detection. Since 2015, convolutional neural networks (CNNs) have been the state of the art for melanoma 
          classification. The standard procedure for training melanoma classification models is via transfer learning where an ImageNet 
          pre-trained CNN is fine-tuned for a melanoma dataset. However, with the increasing number of CNN architectures, choosing the one to 
          employ is becoming increasingly difficult for researchers. 
          <br /><br />
          The following sections will provide a detailed insight into the apparatus and procedure used to build and deploy this AI system, 
          shedding light on the methods and techniques employed to differentiate between benign and malignant skin lesions. The implications 
          of such a tool in terms of scalability and broader applications in the field of dermatology will also be discussed, illustrating the 
          pivotal role that deep learning can play in healthcare.
        </p>

        <div className='text-xl font-semibold underline mt-5 mb-3'> Apparatus </div>
        <p>The successful development of this system, designed for the automated classification of melanoma, will require the integration of 
          several key components and technologies. The apparatus employed for this study will encompass the following essential elements:
          </p><br />
        <ol className="list-decimal list-inside">
<li> Dataset: The foundation of the AI Dermatologist system lies in the dataset obtained from the International Skin Image Collaboration (ISIC) 
  Archive. This dataset comprises 1800 images of benign moles and 1497 images of malignant moles, forming the basis for training and testing 
  the convolutional neural network (CNN). </li><br />
<li> Deep Learning Framework: The core technology used for developing the AI Dermatologist will be the TensorFlow framework with the Keras API. 
  This deep learning framework will enable the construction and training of the CNN model for accurate skin lesion classification.</li><br />
<li> Convolutional Neural Network (CNN): Various CNN architectures will be examined and compared. In this research, we will try to find the 
  architecture that works best for melanoma classification. A custom CNN architecture along with transfer learning will be explored. 
  Transfer learning involves fine tuning pre trained CNN models, like ImageNet, to a more specific use case. </li><br />
<li> Data Preprocessing: The apparatus will include preprocessing techniques such as normalization, which will involve scaling pixel values 
  from the 0-255 range to the 0-1 range. Additionally, data augmentation techniques will be implemented, which will include image rotation 
  and shifting. These preprocessing steps will be facilitated by the use of the NumPy library and the OpenCV (cv2) library for image reading, 
  reshaping, and manipulation.</li><br />
<li> Web Application: To make the AI Dermatologist easily accessible, a web application will be developed using Flask for the backend and 
  HTML, CSS, and JavaScript for the frontend. This user-friendly interface will allow users to upload images for immediate analysis by the 
  trained model. </li><br />
        </ol>

        <div className='text-xl font-semibold underline mt-5 mb-3'> Procedure </div>
        <p>The AI Dermatologist system will be developed through a systematic process that will encompass model architecture design, 
          data preparation, and training. The following steps will detail the procedure involved in building and training the system:
          </p><br />
          <ol className="list-decimal list-inside">
<li> Model Architecture Design: The core of the AI Dermatologist system will be a Convolutional Neural Network (CNN) designed to process dermoscopic images. The CNN architecture will be specifically designed to process and analyze dermoscopic images. 
The custom CNN architecture will consist of multiple convolutional and pooling layers, followed by fully connected layers for feature extraction and classification. The CNN will be configured to handle various image resolutions and characteristics, allowing it to effectively differentiate between benign and malignant skin lesions.
The architecture will consist of layers in the following sequence: <br /><br />
<ul className="list-disc list-inside">
<li>Conv2D (Input): The initial convolutional layer will process input images, extracting relevant features.</li><br />
<li>MaxPooling2D: Subsequent max-pooling layers will reduce spatial dimensions, retaining critical information.</li> <br />
<li>Dropout: Dropout layers will be introduced to reduce overfitting and enhance model generalization.</li> <br />
<li>Conv2D: Additional convolutional layers will refine feature extraction.</li> <br />
<li>MaxPooling2D: Further max-pooling will refine spatial hierarchies.</li> <br />
<li>Dropout: Dropout layers will continue to enhance model robustness.</li> <br />
<li>Flatten: The flattened layer will prepare the feature maps for fully connected layers.</li> <br />
<li>Dense (ReLU): Fully connected layers with rectified linear unit (ReLU) activation functions will aid in feature learning.</li> <br />
<li>Dense (Output): The final dense layer with sigmoid activation function will generate the model's output.</li><br />
</ul>
</li><br />
 


The transfer learning method will involve freezing most layers of a pre trained CNN, like ImageNet, which has been trained on millions of images and adding a few fully connected layers and training the model on our ISIC melanoma dataset.
<br /><br />
<li> Data Preparation: The AI Dermatologist system will be trained on a dataset containing 1800 images of benign moles and 1497 images of 
  malignant moles. Prior to training, data preprocessing steps will include normalization, which will scale pixel values from the 0-255 range 
  to the 0-1 range. Data augmentation techniques, such as image rotation and shifting, will be applied to enhance model performance and 
  robustness. The dataset will be split into training and testing sets to evaluate the model's performance.
  </li><br />
<li> Training: The CNN model will be compiled using appropriate loss functions, optimizers, and evaluation metrics. In the context of melanoma 
  classification, binary cross-entropy loss will be employed. Model training will involve feeding batches of preprocessed images into the 
  network. The training process will aim to minimize the loss function by adjusting the model's internal parameters through backpropagation. 
  A suitable number of training epochs and batch sizes will be determined to optimize model convergence. During training, the dropout layers 
  will help mitigate overfitting, ensuring the model's ability to generalize beyond the training dataset. </li><br />
<li> Model Evaluation: The performance of the AI Dermatologist will be evaluated using various metrics, including accuracy, F1 score, 
  and others, on the testing dataset. </li><br />

</ol>
        <div className='text-xl font-semibold underline mt-5 mb-3'> References </div>
        <ul className="list-disc list-inside">
          <li> A. Naeem, M. S. Farooq, A. Khelifi and A. Abid, "Malignant Melanoma Classification Using Deep Learning: Datasets, Performance Measurements, Challenges and Opportunities," in IEEE Access, vol. 8, pp. 110575-110597, 2020, doi: 10.1109/ACCESS.2020.3001507. </li>
          <li> F. Perez, S. Avila and E. Valle, "Solo or Ensemble? Choosing a CNN Architecture for Melanoma Classification," 2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), Long Beach, CA, USA, 2019, pp. 2775-2783, doi: 10.1109/CVPRW.2019.00336. </li>
        </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default ProjectDescriptionPage
