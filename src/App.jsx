import React from 'react';
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout'
import NotFound from './Pages/NotFound';
import JobPage,{jobLoader} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';


const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method : 'POST',
      headers :{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }

  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method : 'DELETE',
    
    })
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method : 'PUT',
      headers :{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(job)
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />}/>
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path='/add-Job' element={<AddJobPage addJobSubmit={addJob} />}/>
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
      <Route path='*' element={<NotFound />}/>
  
    </Route>
    )
  );
  return <RouterProvider router = {router}/>
  
};

export default App