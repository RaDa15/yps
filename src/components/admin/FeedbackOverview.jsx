import { MessageSquare, Star } from "lucide-react";

const FeedbackOverview = () => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h3 className="text-xl font-semibold mb-6">
        Feedback Summary
      </h3>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>Total Feedback</span>
          <strong>5,640</strong>
        </div>

        <div className="flex justify-between">
          <span>Pending Review</span>
          <strong>42</strong>
        </div>

        <div className="flex justify-between">
          <span>Average Rating</span>

          <span className="flex items-center gap-2">
            <Star className="text-yellow-500" size={18} />
            4.7 / 5
          </span>

        </div>

        <div className="border rounded-xl p-4 bg-blue-50">

          <div className="flex gap-3">

            <MessageSquare className="text-blue-600" />

            <p className="text-sm text-gray-600">
              Most feedback is related to programme availability and certificate downloads.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FeedbackOverview;