export const Card = ({ children, className }) => (
  <div className={`p-6 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-4">
    {children}
  </div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold">{children}</h3>
);

export const CardDescription = ({ children }) => (
  <p className="text-gray-400">{children}</p>
);

export const CardContent = ({ children }) => (
  <div className="mt-4">{children}</div>
);
