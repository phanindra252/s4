      {/* Stats Section */}
      const Stats=()=>{
        return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <p className="text-6xl font-light text-gray-300">08</p>
          <p className="text-sm uppercase tracking-wider mt-2">Years of Expertise</p>
        </div>
        
        <div className="text-center">
          <p className="text-6xl font-light text-gray-300">71</p>
          <p className="text-sm uppercase tracking-wider mt-2">Satisfied Clients</p>
        </div>
        
        <div className="text-center">
          <p className="text-6xl font-light text-gray-300">92</p>
          <p className="text-sm uppercase tracking-wider mt-2">Successful Projects</p>
        </div>
      </div>
      );
    };
      export default Stats;
