import { Experience } from '../../../type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
  experiences: Experience[];
  setExperiences: (experience: Experience[]) => void
}

const ExperienceForm: React.FC<Props> = ({ experiences, setExperiences }) => {

  const [newExperience, setNewExperience] = useState<Experience>({
    jobTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fied: keyof Experience) => {
    setNewExperience({ ...newExperience, [fied]: e.target.value })
  }

  const handleAddExperience = () => {
    setExperiences([...experiences, newExperience])
    setNewExperience(
      {
        jobTitle: '',
        companyName: '',
        startDate: '',
        endDate: '',
        description: '',
      }
    )
  }

  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <input
            type="text"
            placeholder='Job Title'
            value={newExperience.jobTitle}
            onChange={(e) => handleChange(e, 'jobTitle')}
            className='input input-bordered w-full'
          />
          <input
            type="text"
            placeholder="Company Name"
            value={newExperience.companyName}
            onChange={(e) => handleChange(e, 'companyName')}
            className='input input-bordered w-full ml-4'
          />
        </div>

        <div className='flex justify-between'>
          <input
            type="text"
            placeholder='Start Date'
            onFocus={(e) => e.target.type = "date"}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text"
            }}
            value={newExperience.startDate}
            onChange={(e) => handleChange(e, 'startDate')}
            className='input input-bordered w-full'
          />
          <input
            type="text"
            placeholder='End Date'
            onFocus={(e) => e.target.type = "date"}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text"
            }}
            value={newExperience.endDate}
            onChange={(e) => handleChange(e, 'endDate')}
            className='input input-bordered w-full ml-4'
          />
        </div>
        <textarea
          placeholder='Description'
          value={newExperience.description}
          onChange={(e) => handleChange(e, 'description')}
          className='input input-bordered w-full min-h-48 pt-4'
        ></textarea>
      </div>

      <button
        onClick={handleAddExperience}
        className='btn mt-4'
      >
        Ajouter
        <Plus className='w-4' />
      </button>

    </div>
  )
}

export default ExperienceForm
