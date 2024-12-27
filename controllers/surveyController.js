// const Survey = require('../models/survey');

// // Add a new survey
// exports.addSurvey = async (req, res) => {
//   try {
//     const { surveyTitle, surveyCategory, noOfQuestions, questions } = req.body;

//     if (!surveyTitle || !surveyCategory || !noOfQuestions || !questions) {
//       return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     const newSurvey = new Survey({ surveyTitle, surveyCategory, noOfQuestions, questions });
//     await newSurvey.save();

//     res.status(201).json({ success: true, message: 'Survey added successfully', data: newSurvey });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error adding survey', error: error.message });
//   }
// };


// // Get all surveys
// exports.getAllSurveys = async (req, res) => {
//   try {
//     const surveys = await Survey.find();
//     res.status(200).json({ success: true, data: surveys });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error fetching surveys', error: error.message });
//   }
// };

// // Get single survey
// exports.getSurveyById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const survey = await Survey.findById(id);

//     if (!survey) {
//       return res.status(404).json({ success: false, message: 'Survey not found' });
//     }

//     res.status(200).json({ success: true, data: survey });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error fetching survey', error: error.message });
//   }
// };

// // Update a survey
// exports.updateSurvey = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { surveyTitle, surveyCategory, noOfQuestions, questions } = req.body;

//     const updatedSurvey = await Survey.findByIdAndUpdate(
//       id,
//       { surveyTitle, surveyCategory, noOfQuestions, questions },
//       { new: true, runValidators: true }
//     );

//     if (!updatedSurvey) {
//       return res.status(404).json({ success: false, message: 'Survey not found' });
//     }

//     res.status(200).json({ success: true, message: 'Survey updated successfully', data: updatedSurvey });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error updating survey', error: error.message });
//   }
// };


// // Delete a survey
// exports.deleteSurvey = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedSurvey = await Survey.findByIdAndDelete(id);

//     if (!deletedSurvey) {
//       return res.status(404).json({ success: false, message: 'Survey not found' });
//     }

//     res.status(200).json({ success: true, message: 'Survey deleted successfully', data: deletedSurvey });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error deleting survey', error: error.message });
//   }
// };


// // In your controller.js file
// exports.validateAnswers = async (req, res) => {
//   const { id } = req.params;
//   const { answers } = req.body;

//   try {
//     const survey = await Survey.findById(id);
//     if (!survey) {
//       return res.status(404).json({ success: false, message: 'Survey not found' });
//     }

//     let correctAnswersCount = 0;

//     // Loop through the answers and compare with the survey's questions' answers
//     survey.questions.forEach((question) => {
//       if (answers[question._id] && question.answers.includes(answers[question._id])) {
//         correctAnswersCount++;
//       }
//     });

//     if (correctAnswersCount === survey.questions.length) {
//       return res.status(200).json({ correct: true });
//     } else {
//       return res.status(200).json({ correct: false });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error validating answers', error: error.message });
//   }
// };



const Survey = require('../models/survey');

// Add a new survey
exports.addSurvey = async (req, res) => {
  try {
    const { surveyTitle, surveyCategory, noOfQuestions, questions } = req.body;

    if (!surveyTitle || !surveyCategory || !noOfQuestions || !questions) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newSurvey = new Survey({ surveyTitle, surveyCategory, noOfQuestions, questions });
    await newSurvey.save();

    res.status(201).json({ success: true, message: 'Survey added successfully', data: newSurvey });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding survey', error: error.message });
  }
};

// Get all surveys
exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json({ success: true, data: surveys });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching surveys', error: error.message });
  }
};

// Get single survey
exports.getSurveyById = async (req, res) => {
  try {
    const { id } = req.params;
    const survey = await Survey.findById(id);

    if (!survey) {
      return res.status(404).json({ success: false, message: 'Survey not found' });
    }

    res.status(200).json({ success: true, data: survey });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching survey', error: error.message });
  }
};

// Update a survey
exports.updateSurvey = async (req, res) => {
  try {
    const { id } = req.params;
    const { surveyTitle, surveyCategory, noOfQuestions, questions } = req.body;

    const updatedSurvey = await Survey.findByIdAndUpdate(
      id,
      { surveyTitle, surveyCategory, noOfQuestions, questions },
      { new: true, runValidators: true }
    );

    if (!updatedSurvey) {
      return res.status(404).json({ success: false, message: 'Survey not found' });
    }

    res.status(200).json({ success: true, message: 'Survey updated successfully', data: updatedSurvey });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating survey', error: error.message });
  }
};

// Delete a survey
exports.deleteSurvey = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSurvey = await Survey.findByIdAndDelete(id);

    if (!deletedSurvey) {
      return res.status(404).json({ success: false, message: 'Survey not found' });
    }

    res.status(200).json({ success: true, message: 'Survey deleted successfully', data: deletedSurvey });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting survey', error: error.message });
  }
};
