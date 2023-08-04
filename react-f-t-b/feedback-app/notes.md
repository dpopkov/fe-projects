## Notes

- Events and Prop Drilling
  - Install React Icons:
    - `npm i react-icons`
  - Add to Card button with `<FaTimes color="purple" />`
  - Add to button `onClick={() => handleDelete(item.id)}`
    - Add to FeedbackItem prop `handleDelete`
    - Add to FeedbackList prop `deleteFeedback` and pass it to FeedbackItem
    - Add to App function `deleteFeedback` and pass it to FeedbackList
