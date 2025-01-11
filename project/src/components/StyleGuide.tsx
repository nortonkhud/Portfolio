import React from 'react';

const StyleGuide = () => {
  return (
    <div className="p-8 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Primary Colors</h3>
            <div className="space-y-2">
              <div className="h-20 bg-primary rounded-lg"></div>
              <p className="text-sm">Primary: #dc2626</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Background</h3>
            <div className="space-y-2">
              <div className="h-20 bg-light-bg border border-light-border rounded-lg"></div>
              <p className="text-sm">Light: #ffffff</p>
              <div className="h-20 bg-dark-bg border border-dark-border rounded-lg"></div>
              <p className="text-sm">Dark: #000000</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Text Colors</h3>
            <div className="space-y-2">
              <div className="p-4 bg-light-bg border border-light-border rounded-lg">
                <p className="text-light-text-primary">Primary Text</p>
                <p className="text-light-text-secondary">Secondary Text</p>
              </div>
              <div className="p-4 bg-dark-bg border border-dark-border rounded-lg">
                <p className="text-dark-text-primary">Primary Text</p>
                <p className="text-dark-text-secondary">Secondary Text</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">States</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg">
                Hover State
              </button>
              <button className="w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg">
                Secondary State
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Typography</h2>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Heading 1</h1>
          <h2 className="text-3xl font-bold">Heading 2</h2>
          <h3 className="text-2xl font-bold">Heading 3</h3>
          <p className="text-base">Body Text</p>
          <p className="text-sm text-secondary">Secondary Text</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Card Component</h3>
            <p className="text-secondary">Card content with secondary text.</p>
          </div>

          <div className="space-y-4">
            <button className="w-full px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors">
              Primary Button
            </button>
            <button className="w-full px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors">
              Secondary Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;