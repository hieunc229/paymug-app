// This file is use for custom header, changes should not be commited to github or erased

export default function CustomHeader() {
  return (
    /* @ts-expect-error */
    <>
      {/* @ts-expect-error */}
      <script
        defer
        src="https://gumanalytics.com/js/analytics.js?v=be9add48f624"
        data-domain="paymug.co"
        data-session-replay="true"
        data-replay-sample-rate="100"
        data-heatmap="true"
        data-heatmap-sample-rate="100"
      >
        {/* @ts-expect-error */}
      </script>
    </>
  );
}
