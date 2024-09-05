import React from 'react';

const AdForm: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Upload New Ad</h1>
      <form
        action="http://localhost:3001/api/ads"  // Adjust the endpoint URL as needed
        method="post"
        encType="multipart/form-data"
        className="space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="clientId" className="font-semibold mb-1">Client ID:</label>
          <input
            type="number"
            id="clientId"
            name="clientId"
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="clickableLink" className="font-semibold mb-1">Clickable Link:</label>
          <input
            type="url"
            id="clickableLink"
            name="clickableLink"
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="frequencyValue" className="font-semibold mb-1">Frequency Value:</label>
          <input
            type="number"
            id="frequencyValue"
            name="frequencyValue"
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="frequencyUnit" className="font-semibold mb-1">Frequency Unit:</label>
          <select
            id="frequencyUnit"
            name="frequencyUnit"
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="title" className="font-semibold mb-1">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="font-semibold mb-1">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="duration" className="font-semibold mb-1">Duration (in minutes):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* <div className="flex flex-col">
          <label htmlFor="costPerView" className="font-semibold mb-1">Cost Per View:</label>
          <input
            type="number"
            id="costPerView"
            name="costPerView"
            step="0.01"
            className="border border-gray-300 rounded-lg p-2"
          />
        </div> */}

        <div className="flex flex-col">
          <label htmlFor="targetLocation" className="font-semibold mb-1">Target Location (JSON):</label>
          <textarea
            id="targetLocation"
            name="targetLocation"
            rows={4}
            className="border border-gray-300 rounded-lg p-2"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="media" className="font-semibold mb-1">Media (Image or Video):</label>
          <input
            type="file"
            id="media"
            name="media"
            accept="image/*,video/*"
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdForm;
