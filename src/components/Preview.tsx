interface PreviewProps {
  code: string;
}

export function Preview({ code }: PreviewProps) {
  return (
    <iframe
      title="preview"
      srcDoc={`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { margin: 0; font-family: sans-serif; }
            </style>
          </head>
          <body>
            ${code}
            <script>
              window.onerror = function(msg, url, lineNo, columnNo, error) {
                console.error(msg, url, lineNo, columnNo, error);
                return false;
              };
            </script>
          </body>
        </html>
      `}
      className="w-full h-full bg-white"
      sandbox="allow-scripts"
    />
  );
}
